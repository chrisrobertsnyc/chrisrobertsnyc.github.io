import json
import urllib2

mygeoip = "http://www.telize.com/geoip"

response = urllib2.urlopen(mygeoip)
text = response.read()
obj = json.loads(text)

earthlat = str(obj['latitude'])
earthlong = str(obj['longitude'])

print "Your coordinates are " + earthlat + ", " + earthlong + ". You live in " + obj['city'] + "."

myweather = "http://api.openweathermap.org/data/2.5/weather?lat=" + earthlat + "&lon=" + earthlong + "&appid=bd82977b86bf27fb59a04b61b657fb6f"

weatherresponse = urllib2.urlopen(myweather)
weathertext = weatherresponse.read()
weatherobj = json.loads(weathertext)

myTemp = ((weatherobj['main']['temp'] - 273.15)*1.8) + 32

marsRequest = 'http://marsweather.ingenology.com/v1/latest/?format=json'

marsresponse = urllib2.urlopen(marsRequest)
marstext = marsresponse.read()
marsobj = json.loads(marstext)

marsMaxTemp = marsobj['report']['max_temp_fahrenheit']

print "The temperature where you live is " + str(myTemp) + ". The max temperature around the Mars Rover is " + str(marsMaxTemp) + "."

if myTemp > marsMaxTemp:
    print "Okay, seems Mars is definitely colder. You're on the right planet."
else:
    print "The Mars Rover is in a warmer place than you are. Go buy a spacesuit."
