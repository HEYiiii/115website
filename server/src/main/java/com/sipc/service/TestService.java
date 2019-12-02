package com.sipc.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 * 访问路径 localhost:8080/api/messageboard/test
 */

@Path("/test")
public class TestService {

    @GET
    @Path("/test")
    public String test(){
        return "connect successful";
    }
}
