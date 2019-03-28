package com.joinwithme;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import org.reactnative.camera.RNCameraPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.invertase.firebase.RNFirebasePackage;  //<- Notification
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;  //<- Notification
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;  //<- Notification
import io.invertase.firebase.database.RNFirebaseDatabasePackage; // <-- FireBase database

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNFirebasePackage(),
            new RNCameraPackage(),
            new RNGestureHandlerPackage(),
            new CodePush(null, getApplicationContext(), BuildConfig.DEBUG),
            new RNFirebaseMessagingPackage(), //<- Notification
            new RNFirebaseNotificationsPackage(), //<- Notification
            new RNFirebaseDatabasePackage() // <-- FireBase database

      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

}
