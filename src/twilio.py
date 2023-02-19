from twilio.rest import Client

account_sid = 'ACf164d7e16fdee6743427f514dca24a6e'
auth_token = 'a546b6a31e2aaf8a0903535cb68cb6ad'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Your friend Nguyen Huy Khang is in danger. Location is 234 Wilson Rd, East Lansing, "
                          "MI 48825, USA",
                     from_='+18559734060',
                     to='+15174026152   '
                 )

print(message.sid)
