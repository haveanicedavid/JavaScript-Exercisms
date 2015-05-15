# Can someone help me here? The only way I can make this work is by changing the tests...
# as they're written:
  # def test_configurable_7_13_17_to_20
  #   skip
  #   assert_equal 51, SumOfMultiples.new(7, 13, 17).to(20)
  # end
#... I get an error of "undefined method `to' for #<SumOfMultiples:0x007f94b08bbd10 @multiples=[7, 13, 17]>"
# I've tried all I can think of to make it work the way tests are writen, and can't so far

class SumOfMultiples

  attr_accessor :multiples

  def initialize(*multiples)
    @multiples = multiples
  end

  def self.to(num)
    multiples = [3,5] || @multiples
    n = *(1...num).to_a.select {|x| multiples.any? {|y| x % y == 0} }
    n.empty? ? 0 : n.reduce(:+)
  end
  
end
