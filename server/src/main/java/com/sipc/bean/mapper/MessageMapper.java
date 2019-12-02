package com.sipc.bean.mapper;

import com.sipc.bean.db.Message;

import java.util.List;

public interface MessageMapper {
        public void addMessage(Message message);     //增加一条留言
        public List<Message> getMessage();     //获取所有消息
}
