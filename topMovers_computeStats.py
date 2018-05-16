import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats 

df = pd.read_csv("c:\workbench\Python-test\TopMovers_Jan_to_March.csv", skipinitialspace = True)

# cleanse the columns of any extra initial or trailing spaces 
df.columns = df.columns.str.strip()
# Employed = df['Employed?'].value_counts()

# Sort the list by % Change
df.sort_values(['% Change'])

print(df.columns)
pct_chg = df['% Change']
prc_chg = df['Change']
stk_vol = df['Volume']

######## probability of a ticker appearing more than once ######
# compute the number of days in the dataset 
#total_days = df['Date'].nunique()

# create a list of counts for each symbol
ticker_counts = df['Symbol'].value_counts()

# print_chart to a list of tickers that appear more than once 
print_chart = ticker_counts[ticker_counts > 1]

#TODO
#   compute the _average_%_change_ for each _symbol_ that appears in this list 
#   create a new _function_var_ = np.arange( min , max, 0.5)
#   plat the range -> plt.plot(_function_var_, poisson.pmf(_function_var_, _average_%_change_))
#TODO

################################################################
################################################################
####### Print basic statistical data of the data set ###########
#print ('Mean: ', np.mean(print_chart))
#print ("Median: ", np.median(print_chart))
#print ("Mode: ", stats.mode(print_chart))

# display the 90th percentile 
#print (np.percentile(print_chart,90))

# End basic statistical output section ########################
###############################################################
####### BEGIN advanced statistical data #######################

#print(np.corrcoef([df['Rank'],df['Price'],df['Change'], df['% Change'], df['Volume']]))

#   Linear Regression
slope, intercept, r_value, p_value, std_err = stats.linregress(df['Price'], df['Change'])

#   Polynomial Regression
p4 = np.poly1d(np.polyfit(df['Rank'], df['% Change'],15))

#print (r_value ** 2)

# END advanced statistical data ###############################
################################################################
# Chart output section #########################################

# plot histogram
#plt.hist(print_chart,100,range=(2,ticker_counts.max()))
#plt.hist(print_chart,100)

# LINEAR REGRESSION - define function based on  outputs above 
#def predict(x):
#    return slope * x + intercept 

#fitline = predict(df['Price'])

#   plot scatter
plt.scatter(df['Rank'],df['% Change'])

#   plot linear regression
#plt.plot(df['Price'], fitline, c='g')

#   plot polynomial regression
xp = np.linspace(0,100,100)
plt.plot(xp,p4(xp), c='r')

# PRINT CHART TO FILE 
# plt.savefig('c:\\workbench\\Python-test\\MyPlot.png', format='png')

# DRAW the chart on screen 
plt.show()

# End chart output section #####################################