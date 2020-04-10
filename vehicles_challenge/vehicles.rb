class Vehicle
	
    def initialize(make, model)
        @make = make
        @model = model
		@fuel_level = 0
		@max_tank = 0
	end
	
    def fuel_level
        return "#{@fuel_level}L in the tank"
    end

    def refuel(litres)
        @fuel_level += litres
		if @fuel_level > @max_tank
			@fuel_level -= litres
			return "Can't refuel over max capacity!"
		end		
    end
    
end

class Car < Vehicle
    
    def initialize(make, model)
        super make, model
		@max_tank = 50
	end

    def wind_up_windows
    	return "*window noise*"
    end 

end

class Motorbike < Vehicle

    def initialize(make, model)
        super make, model
		@max_tank = 15		
    end
	
	def wheelie
        return "*wheelie noise*"
    end	
	
end