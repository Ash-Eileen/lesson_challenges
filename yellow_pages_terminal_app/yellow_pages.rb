phonebook = [
	{name: "Alex Holder", phone: "+6100000000 ", title: "Educator at Coder Academy", address: "118 Walker St, North Sydney, NSW 2060"},
	{name: "Ubisoft Australia", phone: "+6100000001", title: "Videogame sales & support 14", address: "Mountain St, Ultimo, NSW 2007"},
	{name: "Saad Saaed", phone: "+6100000002", title: "Academic & Partnerships Director at Coder Academy", address: "118 Walker St, North Sydney, NSW 2060"}
]


# This is the view method for the phonebook. 
def view_phonebook phonebook
	puts "---------------------------------------"
	phonebook.each { |key|
		puts "Name: #{key[:name]}\nPhone: #{key[:phone]}\nTitle: #{key[:title]}\nAddress: #{key[:address]}"
		puts "---------------------------------------"
	}
end

# This is the method to add an entry to the phonebook
def add_to_phonebook phonebook
	
	puts "What is their full name?"
	name = gets.strip.split.map(&:capitalize).join(' ')
	
	puts "What is their phone number?"
	phone = gets.strip
	
	puts "What is their title?"
	title = gets.strip
	
	puts "What is their address?"
	address = gets.strip.split.map(&:capitalize).join(' ')
	
	puts "Thank you for adding #{name}"
	
	new_entry = {name: name, phone: phone, title: title, address: address}
	
	phonebook << new_entry
end

# This is the method to remove from the phonebook
def remove_from_phonebook phonebook
	puts "Who would you like to remove?"
	name = gets.strip.split.map(&:capitalize).join(' ')
	
	# Utilising a for loop to go through every key in the phonebook. 
	for key in phonebook
		if key.has_value?(name)
			puts "Are you sure you want to remove #{name}?"
			response = gets.strip.downcase
			# Per the instructions this confirms if the user wants to remove the entry from the phonebook
			if response == "yes"
				puts "#{name} has been removed."
				phonebook.delete(key)
			elsif response == "no"
				puts "#{name} has not been removed."
			else
				puts "Invalid selection. No action has been taken at this time."
			end
			return phonebook
		end
	end
	puts "#{name} not found in phonebook. No action has been taken at this time."	

end

def phonebook_terminal_edition phonebook
	puts "Welcome to your Ruby Phonebook!"
	# So I decided to continue the phonebook app until the user exits. I added the below variable so I can use it to exit
	continue = true	
	while continue
		
		puts "What would you like to do? (options: view, add, remove)?"
		response = gets.strip.downcase
        
        # This checks the users input from above and then depending on the input it will run one of the above methods
		case response
			when "view"
				view_phonebook phonebook
			when "add"
				add_to_phonebook phonebook
			when "remove"
				remove_from_phonebook phonebook
			else
				puts "Oh no. That's not a valid selection."
		end
		
		puts 'Return to menu or exit? (Please enter "return" or "exit")'
		return_or_exit = gets.strip.downcase
		
		# Here we loop until the user enters one of the available options.
		until return_or_exit == "return" || return_or_exit == "exit"
			puts "Oh no. That's not a valid selection. Please try again."
			puts "Return or exit?"
			return_or_exit = gets.strip.downcase
		end	
		
		case return_or_exit
			when "return"
				system "clear"
			when "exit"
				continue = false
		end
	end
end
			
phonebook_terminal_edition phonebook