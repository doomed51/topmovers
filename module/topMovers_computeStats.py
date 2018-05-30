#basic libraries for dataframes, stats, and charts
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats

#these enable ticker return data 
import dateutil
import datetime

#these enable K-means clustering 
from sklearn.metrics import r2_score
from sklearn.cluster import KMeans
from sklearn.preprocessing import scale

#API Interfaces
from api_IEX import api_IEX
from api_Excel import api_Excel

# Read in dailymovers data from excel 
excelAPI = api_Excel("topMovers_20180702.xlsm", "C:/Workbench/topMovers")
topMoversData = excelAPI.readExcelSheet("dailyMovers_Data")

#iexAPI = api_IEX("AAPL")
#iexAPI.getClosePriceOnDate(datetime.datetime.now().date() - datetime.timedelta(1))
#print(iexAPI.dfResponse)

# cleanse the columns of any extra initial or trailing spaces
topMoversData.columns = topMoversData.columns.str.strip()

#normalize dates - deprecated as now reading excel directly with api class 
#topMoversData['Date'] = topMoversData['Date'].apply(dateutil.parser.parse, dayfirst=False)

# Define train data as the first 80% of the dataset 
topMoversData_train = topMoversData[:int(len(topMoversData)*.8)]

#Define test data as the last 80% of the dataset 
topMoversData_test = topMoversData[int(len(topMoversData)*.8):]

def tickerReturnSinceFirst():
    # create a dataframe consisting of ticker data for tickers in more than 1 day 
    tickerCounts = topMoversData_train.groupby('Symbol').filter(lambda x: x['Symbol'].count() > 1)
    
    #define the aggregator for the groupBy function below 
    aggregators = {
        '% Change' : {
            'avgPctChange' : 'mean',
            'totalRecords' : 'count'
        },
        'Date' : {
            'firstDate' : 'min',
            'daysSinceFirst' : lambda y: datetime.datetime.now().date() - min(y).date(),
            'daysBetweenFirstAndLast' : lambda y: max(y).date() - min(y).date()
        }        
    }

    agTickers = tickerCounts.groupby('Symbol').agg(aggregators)
    print(agTickers)
    agTickers.columns = agTickers.columns.droplevel(level=0)
    return agTickers
    
def plotRankAndPctChange():
    #   Polynomial Regression
    rankPctChangePolynomial = np.poly1d(np.polyfit(topMoversData_train['Rank'], topMoversData_train['% Change'],20))

    #   define the plot space ?
    xp = np.linspace(0,100,100)
    
    #plot the training data against polynomial function
    plt.figure(1)
    plt.plot(xp,rankPctChangePolynomial(xp), c='r')
    plt.scatter(topMoversData_train['Rank'], topMoversData_train['% Change'])

    # plot the test data against polynomial function
    plt.figure(2)
    plt.scatter(topMoversData_test['Rank'], topMoversData_test['% Change'],c="g")
    plt.plot(xp,rankPctChangePolynomial(xp), c='r')

    r2 = r2_score(topMoversData_test['% Change'], rankPctChangePolynomial(topMoversData_test['Rank']))

    print(r2)

def  clusterPctChange():
    pctChangeKModel = KMeans(n_clusters=3)
    
    pctChangeArray = np.array(topMoversData_train[['Rank','% Change']])

    #print(pctChangeArray[0:10])
    pctChangeKModel = pctChangeKModel.fit(scale(pctChangeArray))
    
    print(pctChangeKModel.labels_)

    plt.figure(figsize=(8,6))
    plt.scatter(pctChangeArray[:,0], pctChangeArray[:,1], c=pctChangeKModel.labels_.astype(float))
    
def writeDataframeToExcel(myDF, myFileName, mySheetName):
    writer = pd.ExcelWriter(myFileName, engine='xlsxwriter')
    myDF.to_excel(writer, sheet_name=mySheetName)
    writer.save()

#plotRankAndPctChange()
#clusterPctChange()

# DRAW the chart on screen
plt.show()


#TODO
#   compute the _average_%_change_ for each _symbol_ that appears in this list
#   create a new _function_var_ = np.arange( min , max, 0.5)
#   plat the range -> plt.plot(_function_var_, poisson.pmf(_function_var_, _average_%_change_))
#TODO
######## probability of a ticker appearing more than once ######
# compute the number of days in the dataset
#total_days = topMoversData_train['Date'].nunique()

################################################################
################################################################
####### BEGIN basic statistical data ###########################
#print ('Mean: ', np.mean(print_chart))
#print ("Median: ", np.median(print_chart))
#print ("Mode: ", stats.mode(print_chart))

# display the 90th percentile
#print (np.percentile(print_chart,90))

# End basic statistical output section ########################
###############################################################
####### BEGIN advanced statistical data #######################

#print(np.corrcoef([topMoversData_train['Rank'],topMoversData_train['Price'],topMoversData_train['Change'], topMoversData_train['% Change'], topMoversData_train['Volume']]))

#print (r_value ** 2)

#   Linear Regression
#    slope, intercept, r_value, p_value, std_err = stats.linregress(topMoversData_train['Rank'], topMoversData_train['% Change'])

# END advanced statistical data ###############################
################################################################
# Chart output section #########################################

# plot histogram
#plt.hist(print_chart,100,range=(2,ticker_counts.max()))
#plt.hist(print_chart,100)

# LINEAR REGRESSION - define function based on  outputs above
#def predict(x):
#    return slope * x + intercept

#fitline = predict(topMoversData_train['Price'])

#   plot scatter
#plt.scatter(topMoversData_train['Rank'],topMoversData_train['% Change'])

#   plot linear regression
#plt.plot(topMoversData_train['Price'], fitline, c='g')

# PRINT CHART TO FILE
# plt.savefig('c:\\workbench\\Python-test\\MyPlot.png', format='png')

# End chart output section #####################################