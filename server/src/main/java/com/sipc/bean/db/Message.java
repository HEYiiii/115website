package com.sipc.bean.db;

import com.google.gson.annotations.Expose;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Message {      //对应表message

    @Expose
    private String send_id;

    @Expose
    private String time;

    @Expose
    private String message;

//    public Message(String send_id,String time,String message){
//        this.send_id = send_id;
//        this.time = time;
//        this.message = message;
//    }

    public Message(String send_id,String message){
        this.send_id = send_id;
        this.message = message;
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.time = df.format(new Date());
    }

    public Message(){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.time = df.format(new Date());
    }


    public String getSend_id() {
        return send_id;
    }

    public void setSend_id(String send_id) {
        this.send_id = send_id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}