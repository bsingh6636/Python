import pyjokes
import pyttsx3
engine = pyttsx3.init()
# engine.say("I am a robot")
# engine.runAndWait()
joke=pyjokes.get_joke()
print(joke)
engine.say(joke)
engine.runAndWait()
