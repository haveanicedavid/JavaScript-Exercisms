class School

  attr_accessor :to_hash

  def initialize
    @to_hash = Hash.new(Array.new)
  end

  # def add(name, grade)
  #   to_hash.merge(Hash.new { |name, grade| name[grade] += 1 })
  # end

  def add(name, grade)
    if to_hash[grade]
      @to_hash[grade].push(name)
    else
      @to_hash[grade] = name
    end
  end

end