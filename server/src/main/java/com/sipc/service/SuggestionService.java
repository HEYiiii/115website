package com.sipc.service;

import com.sipc.bean.api.MessageModel;
import com.sipc.bean.api.SuggestionModel;
import com.sipc.bean.api.base.ResponseModel;
import com.sipc.bean.db.Message;
import com.sipc.bean.db.Suggestion;
import com.sipc.bean.mapper.MessageMapper;
import com.sipc.bean.mapper.SuggestionMapper;
import com.sipc.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.logging.Logger;

/**
 * 访问路径 localhost:8080/messageboard/api/suggestion
 */


@Path("/suggestion")
public class SuggestionService {
    private SqlSession sqlSession= MyBatisUtil.getSqlSession();
    private Logger logger = Logger.getLogger(SuggestionService.class.getName());

    @GET
    @Path("/test")
    public String test() {
        return "connect successful!";
    }


    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseModel doAdd(SuggestionModel model){

        logger.info(model.toString());

        if(!SuggestionModel.check(model))
            return ResponseModel.buildParameterError();

        // 开始添加数据
        SuggestionMapper mapper = sqlSession.getMapper(SuggestionMapper.class);
        mapper.addSuggestion(new Suggestion(model.getSend_id(),model.getEmail(),model.getSuggestion()));
        sqlSession.commit();

        logger.info("添加成功");

        return ResponseModel.buildOk();
    }

}
