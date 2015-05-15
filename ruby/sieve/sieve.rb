class Sieve

  attr_reader :num

  def initialize(num)
    @num = num
  end

  # def primes
  #   [*(2..num)].select { |n| is_prime?(n) }
  # end

# Create your range, starting at two and continuing up to and including the given limit. (i.e. [2, limit])

  def primes
    nums = *(2...num).to_a
    i = 0
    check = [i, i+1]
    while i 
    end
  end

# The algorithm consists of repeating the following over and over:

# - take the next available unmarked number in your list (it is prime)
# - mark all the multiples of that number (they are not prime)

# Repeat until you have processed each number in your range.

  def is_prime?(num)

  end
  # def is_prime?(num)
  #   return false if num <= 1
  #   2.upto(Math.sqrt(num)) do |x|
  #     return false if num % x == 0
  #   end
  #   true
  # end  

end

test = Sieve.new(10)
test.primes # => 

# ~> ZeroDivisionError
# ~> divided by 0
# ~>
# ~> /Users/ddaniel/exercism/ruby/sieve/sieve.rb:20:in `block in primes'
# ~> /Users/ddaniel/exercism/ruby/sieve/sieve.rb:20:in `map'
# ~> /Users/ddaniel/exercism/ruby/sieve/sieve.rb:20:in `primes'
# ~> /Users/ddaniel/exercism/ruby/sieve/sieve.rb:48:in `<main>'
