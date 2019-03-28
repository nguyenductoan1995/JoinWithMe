import React, { Component } from 'react'
import { View, Text, NotificationOpen } from 'react-native'
import firebase from 'react-native-firebase'

export default class Chat extends Component {
  async componentDidMount() {
    const notificationOpen: NotificationOpen = await firebase.notifications().getInitialNotification()
    console.tron.log(notificationOpen)
    if (notificationOpen) {
      const action = notificationOpen.action
      const notification: Notification = notificationOpen.notification
      const seen = []
      alert(JSON.stringify(notification.data, (key, val) => {
        if (val != null && typeof val === 'object') {
          if (seen.indexOf(val) >= 0) {
            return
          }
          seen.push(val)
        }
        return val
      }))
    }
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
      .setDescription('My apps test channel')
    // Create the channel
    firebase.notifications().android.createChannel(channel)
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    })
    this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
      // Process your notification as required
      notification
        .android.setChannelId('test-channel')
        .android.setSmallIcon('ic_launcher')
      firebase.notifications()
        .displayNotification(notification)
    })
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action
      // Get information about the notification that was opened
      const notification: Notification = notificationOpen.notification
      const seen = []
      alert(JSON.stringify(notification.data, (key, val) => {
        if (val != null && typeof val === 'object') {
          if (seen.indexOf(val) >= 0) {
            return
          }
          seen.push(val)
        }
        return val
      }))
      firebase.notifications().removeDeliveredNotification(notification.notificationId)
    })
  }

  componentWillUnmount() {
    this.notificationDisplayedListener()
    this.notificationListener()
    this.notificationOpenedListener()
  }

  render() {
    return (
      <View>
        <Text>Firebase</Text>
      </View>
    )
  }
}
