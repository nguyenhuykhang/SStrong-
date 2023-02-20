from twilio.rest import Client

account_sid = 'ADD_YOURS'
auth_token = 'ADD_YOURS'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Your friend ADD_YOURS is in danger. Location is ADD_YOURS",
                     from_='ADD_YOURS',
                     to='ADD_YOURS'   '
                 )

print(message.sid)
