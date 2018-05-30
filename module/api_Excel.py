import pandas as pd 

class api_Excel: 
    """ A class to read, write and manipulate Excel data """

    directory = ""

    """ Initialize with filename and directory """
    def __init__(self, myFileName, myDirectory):
        self.directory = myDirectory + "/" + myFileName

    """ Read in the target worksheet as a dataframe """
    def readExcelSheet(self, mySheetName):
        return pd.read_excel(self.directory, sheet_name=mySheetName)

    """ Write a dataframe to excel """
    def writeDataframeToExcel(self, myDF, mySheetName):
        writer = pd.ExcelWriter(self.directory, engine='xlsxwriter')
        myDF.to_excel(writer, sheet_name=mySheetName)
        writer.save()