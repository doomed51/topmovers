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
        apiPath = self.baseURL + "/chart/5y"
        
        #ping the api
        chartResponse = pd.read_json(apiPath)
        
        #filter the dataframe by the target date
        chartResponse = chartResponse.loc[chartResponse['date'] == tgtDate]#(datetime.datetime.now() - datetime.timedelta(1)).date()]
        
        #set the response to the close price 
        self.dfResponse = chartResponse['close']