class Song
	
	def initialize(title, duration, genre)
		@title = title
		@duration = duration
		@genre = genre
	end
end


# Create your 3 instances of the Song class here
first_song = Song.new("without you", 3.45, "Pop")
second_song = Song.new("Icarus", 3.45, "Indie")
third_song = Song.new("Wasteland", 3.50, "Rock")

# p first_song

# Add your Album, Artist and BillboardTop10 classes below
class Album
	
	def initialize(title, release_date)
		@title = title
		@release_date = release_date
		@songs = Hash.new
	end
	
	def add_song(new_song)
		@songs.push(new_song)
	end
	
	def number_of_songs
		@songs.length
	end
end

first_album = Album.new("Oh Wonder", 2015)
second_album = Album.new("Bad Blood", 2013)
third_album = Album.new("The Autumn Effect", 2005)
fourth_album = Album.new("Greatest hits", 1999)

# p first_album

# first_album.add_song(first_song)

# p first_album.number_of_songs

class Artist
	
	def initialize(name)
		@name = name
		@albums = Hash.new
	end
	
	def add_album(album)
		@albums.push(album)
	end
	
	def number_of_albums
		@albums.length
	end
	
end

first_artist = Artist.new("Steve Wonder")
second_artist = Artist.new("Taylor Swift")

first_artist.add_album(first_album)
first_artist.add_album(fourth_album)

class BillboardTop10
	
	def initialize(year)
		@year = year
		@artists = [Hash.new
	end
	
	def add_artist(artist)
		@artists = @artists.push(artist)
		if @artists.length > 10
			@artists.shift
		else
			@artists
		end
		self
	end
	
	def number_of_artists
		@artists.length 
	end
end

billboard_top_10 = BillboardTop10.new(2020)

# p billboard_top_10.add_artist(first_artist).add_artist(second_artist)