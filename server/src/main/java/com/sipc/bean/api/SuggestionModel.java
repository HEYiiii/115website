package com.sipc.bean.api;

import com.google.gson.annotations.Expose;
import com.sipc.bean.db.Suggestion;

public class SuggestionModel {

        @Expose
        private String send_id;

        @Expose
        private String email;

        @Expose
        private String suggestion;


        public static boolean check(SuggestionModel model){
            return model != null
                    && !model.getSend_id().isEmpty()
                    && !model.getEmail().isEmpty()
                    && !model.getSuggestion().isEmpty();
        }

        public SuggestionModel(Suggestion suggestion)
        {
            this.suggestion = suggestion.getSuggestion();
            this.send_id = suggestion.getSend_id();
            this.email = suggestion.getEmail();
        }

        @Override
        public String toString() {
            return "{\n" +
                    "        \"send_id\":" + send_id + ",\n" +
                    "        \"email\":" + email + "\n" +
                    "        \"suggestion\":" + suggestion + "\n" +
                    "        }";
        }

        public String getSend_id() {
            return send_id;
        }

        public void setSend_id(String send_id) {
            this.send_id = send_id;
        }

        public String getEmail() { return email;}

        public void setEmail(String email) { this.email = email; }

        public String getSuggestion() {
            return suggestion;
        }

        public void setSuggestion(String suggestion) { this.suggestion = suggestion; }
}
