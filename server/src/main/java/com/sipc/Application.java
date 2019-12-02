package com.sipc;

import com.sipc.filter.CorsFliter;
import com.sipc.provider.GsonProvider;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;

import java.util.logging.Logger;

public class Application extends ResourceConfig {

    public Application() {
        register(GsonProvider.class);
        register(MultiPartFeature.class);

        register(Logger.class);
        register(CorsFliter.class);
    }
}
