package com.sipc.service;

import com.sipc.bean.api.MessageModel;
import com.sipc.bean.api.base.ResponseModel;
import com.sipc.bean.db.Message;
import com.sipc.bean.mapper.MessageMapper;
import com.sipc.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.logging.Logger;

/**
 * 访问路径 localhost:8080/messageboard/api/message
 */


@Path("/message")
public class MessageService {
    private SqlSession sqlSession= MyBatisUtil.getSqlSession();
    private Logger logger = Logger.getLogger(MessageService.class.getName());

    @GET
    @Path("/test")
    public String test() {
        return "connect successful!";
    }


    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseModel<List<Message>> getMessage(){

        // 开始获取数据
        MessageMapper mapper = sqlSession.getMapper(MessageMapper.class);
        List<Message> messages = mapper.getMessage();

        messages = messages.subList(0,10);

        return ResponseModel.buildOk(messages);
    }


    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseModel doAdd(MessageModel model){

        logger.info(model.toString());

        if(!MessageModel.check(model))
            return ResponseModel.buildParameterError();

        // 开始添加数据
        MessageMapper mapper = sqlSession.getMapper(MessageMapper.class);
        mapper.addMessage(new Message(model.getSend_id(),model.getMessage()));
        sqlSession.commit();

        logger.info("添加成功");

        return ResponseModel.buildOk();
    }

}
