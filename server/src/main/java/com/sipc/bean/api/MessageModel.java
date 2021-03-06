package com.sipc.bean.api;

import com.google.gson.annotations.Expose;
import com.sipc.bean.db.Message;

public class MessageModel {

        @Expose
        private String send_id;

        @Expose
        private String message;


        public static boolean check(MessageModel model){
            return model != null
                    && !model.getSend_id().isEmpty()
                    && !model.getMessage().isEmpty();
        }

        public MessageModel(Message message)
        {
            this.message = message.getMessage();
            this.send_id = message.getSend_id();
        }

        @Override
        public String toString() {
            return "{\n" +
                    "        \"send_id\":" + send_id + ",\n" +
                    "        \"message\":" + message + "\n" +
                    "        }";
        }

        public String getSend_id() {
            return send_id;
        }

        public void setSend_id(String send_id) {
            this.send_id = send_id;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
}
