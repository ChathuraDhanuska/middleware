package org.blimpit.emailservice;

/**
 * A interface which provides email service for blimpit projects
 */
public interface EmailService {

    /**
     * Facilitates the email sending 
     * @param to email of the recipient
     * @param subject Subject of the email
     * @param body body of the email
     * @return send or not
     */
    boolean sendEmail(String to, String subject, String body);



}
