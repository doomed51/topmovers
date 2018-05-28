import pandas as pd
import dateutil
import datetime

class api_IEX:
    """A class to work with the IEX API @ api.iextrading.com """
    
    baseURL = "https://api.iextrading.com/1.0/stock/"
    dfResponse = "nothing queried"
    
    def __init__(self, ticker):
        self.symbol=ticker
        self.baseURL = self.baseURL + ticker

    def testAPI(self):
        """ Basic test function to check if the API is working"""
        apiPath = self.baseURL + "/delayed-quote"
        self.dfResponse = pd.read_json(apiPath, typ='series')
    
    """returns the close price of a ticker on the target date """
    def getClosePriceOnDate(self, tgtDate):
        #filter the dataframe by the target date
        chartResponse = self._getChartDataForTicker(tgtDate) #chartResponse.loc[chartResponse['date'] == tgtDate]#(datetime.datetime.now() - datetime.timedelta(1)).date()]

        if chartResponse.empty == False :
            #set the response to the close price 
            self.dfResponse = chartResponse['close']

    """ Private function that returns Chart Data for the specified target date """
    def _getChartDataForTicker(self, tgtDate):
        
        #initialize empty dataframe
        chartResponse = pd.DataFrame()

        #set api path for the appropriate date
        apiPath = self.baseURL + "/chart/5y"        
        
        #skip weekends 
        if tgtDate.weekday() < 5:
            #ping the api
            chartResponse = pd.read_json(apiPath)
            #return chart dataframe for the target date
            return chartResponse.loc[chartResponse['date'] == tgtDate]
        else:
            print('Date Skipped!') 
            print(tgtDate)
            #return empty dataframe response 
            return chartResponse

        