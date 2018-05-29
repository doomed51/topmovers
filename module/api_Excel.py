import pandas as pd 

class api_Excel: 
    """ A class to read, write and manipulate Excel data """

    directory = ""

    """ Initialize with filename and directory """
    def __init__(self, myFileName, myDirectory):
        self.directory = myDirectory + "/" + myFileName

    def readExcelSheet(self, mySheetName):
        return pd.read_excel(self.directory, sheet_name=mySheetName)
