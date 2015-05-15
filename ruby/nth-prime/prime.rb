class Prime

  def self.nth(num)
    if num < 1
      raise ArgumentError.new("Error") 
    else
      primes = [2]
      until primes.size == num do
        n = (primes.last) + 1
        until is_prime(n) do
          n += 1 
        end
        primes << n
      end
      primes.last
    end
  end

  def self.is_prime(num)
    return false if num <= 1
    2.upto(Math.sqrt(num)) do |x|
      return false if num % x == 0
    end
    true
  end  

end
