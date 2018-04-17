package org.blimpit.printservice;

/**
 *  print service functions
 */
public interface PrintService {

    /**
     * Print the given string using given printer
     * @param printableStr Formatted String to be printed
     * @param printerName Name of the printer
     * @return Indicate the success of the printer job
     */
    boolean print(String printableStr, String printerName);
    /**
     * Print using first available printer
     * @param printableStr Formatted String to be printed
     * @return Indicate the success of the printer job
     */
    boolean print(String printableStr);
    /**
     * Can provide the customized page formats for the printer
     * @param printableStr  Formatted String to be printed
     * @param format  customized parameters of the document to be printed
     * @param printerName Name of the printer
     * @return Indicate the success of the printer job
     */
    boolean print(String printableStr, PrintFormat format, String printerName);
    /**
     * Can provide the customized page format for the printer
     * @param printableStr  Formatted String to be printed
     * @param format  customized parameters of the document to be printed
     * @return Indicate the success of the printer job
     */
    boolean print(String printableStr, PrintFormat format);
    
}
