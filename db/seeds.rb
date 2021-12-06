# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Instrument.all.delete_all

User.create(email: "admin@lets-jam.com", password: "adminPasswordHere", username: "Justin", first_name: "Justin", last_name: "Reeves", zip_code: "02155")
User.create(email: "default1@lets-jam.com", password: "Password", username: "Default1", first_name: "Default1", last_name: "Account", zip_code: "02111")
User.create(email: "default2@lets-jam.com", password: "Password", username: "Default2", first_name: "Default2", last_name: "Account", zip_code: "02134")

Instrument.find_or_create_by(musical_instrument: "voice")
Instrument.find_or_create_by(musical_instrument: "guitar")
Instrument.find_or_create_by(musical_instrument: "bass")
Instrument.find_or_create_by(musical_instrument: "drum kit")
Instrument.find_or_create_by(musical_instrument: "accordion")
Instrument.find_or_create_by(musical_instrument: "banjo")
Instrument.find_or_create_by(musical_instrument: "piano")
Instrument.find_or_create_by(musical_instrument: "upright bass")
Instrument.find_or_create_by(musical_instrument: "cello")
Instrument.find_or_create_by(musical_instrument: "violin")
Instrument.find_or_create_by(musical_instrument: "viola")
Instrument.find_or_create_by(musical_instrument: "saxophone")
Instrument.find_or_create_by(musical_instrument: "trumpet")
Instrument.find_or_create_by(musical_instrument: "trombone")
Instrument.find_or_create_by(musical_instrument: "flute")