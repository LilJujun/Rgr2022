package com.example.rgr.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Map;

@Service
public class MailClient {
    private static String MAIL_FROM_DEFAULT = "kotogramm.no.reply@gmail.com";
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;

    private String build(String template, Map<String, Object> variables) {
        Context context = new Context();
        context.setVariables(variables);

        return templateEngine.process(template, context);
    }

    public void sendMail(String to, String subject, String msg) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setSubject(subject);
            helper.setFrom(MAIL_FROM_DEFAULT);
            helper.setTo(to);
            helper.setText(msg, true);
            mailSender.send(message);
        } catch (MessagingException ex) {
            ex.printStackTrace();
        }
    }


}
