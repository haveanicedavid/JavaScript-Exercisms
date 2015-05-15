class Phrase

  def initialize(str)
    @str = str
  end

  def word_count
    words.each_with_object(Hash.new(0)) { |word, hash| hash[word] += 1 }
  end

  def words
    @str.downcase.gsub(/[^a-z\d\s']/i, " ").split(" ")
  end

end