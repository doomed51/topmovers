import numpy as np
import pandas as pd

import matplotlib.pyplot as plt
from scipy import stats

from sklearn.metrics import r2_score
from sklearn.cluster import KMeans
from sklearn.preprocessing import scale

topMoversData = pd.read_csv("topMovers.csv", skipinitialspace = True)

# cleanse the columns of any extra initial or trailing spaces
topMoversData.columns = topMoversData.columns.str.strip()
print()

# Define train data as the first 80% of the dataset 
topMoversData_train = topMoversData[:int(len(topMoversData)*.8)]

#Define test data as the last 80% of the dataset 
topMoversData_test = topMoversData[int(len(topMoversData)*.8):]

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
    

# INCOMPLETE
# run linear reg on ticker counts and display chart results
def tickerCountLinReg():
    # create a list of counts for each symbol
    #ticker_counts = (topMoversData_train['Symbol'].value_counts().keys(), topMoversData_train['Symbol'].value_counts())
    #ticker_counts = topMoversData_train.groupby("Symbol").filter(lambda g: g.Symbol.size > 20)
    ticker_counts = topMoversData_train.groupby('Symbol')#.filter(lambda g: len(g) > 1)
    
    #p4 = np.poly1d(np.polyfit(topMoversData_train['Rank'], topMoversData_train['% Change'],15))
    histogramValues = np.histogram(ticker_counts.size()) 
    stats.expon.fit(histogramValues)
    #print(ticker_counts['% Change'].agg([np.size, np.mean, np.std]))
    
    #slope, intercept, r_value, p_value, std_err = stats.linregress(np.histogram(ticker_counts.size()))

    # print_chart to a list of tickers that appear more than once
    #print_chart = ticker_counts[ticker_counts > 1]

    #plt.hist(ticker_counts.size().tail(),100,range=(2,ticker_counts.max()))
    plt.hist(ticker_counts.size(),30,range=(1,50))
    #plt.scatter(np.histogram(ticker_counts.size())[0],np.histogram(ticker_counts.size())[1])
    #print(ticker_counts.size().filter(lambda g: g.size() > 10))
    plt.show()

print(topMoversData_train.columns)


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

#plotRankAndPctChange()
clusterPctChange()

# DRAW the chart on screen
plt.show()

# End chart output section #####################################