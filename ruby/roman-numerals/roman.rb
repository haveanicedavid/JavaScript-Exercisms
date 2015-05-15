class Fixnum

  def roman
    {
      1000 => "M",  
      900  => "CM",  
      500  => "D",  
      400  => "CD",
      100  => "C",  
      90   => "XC",  
      50   => "L",  
      40   => "XL",  
      10   => "X",  
      9    => "IX",  
      5    => "V",  
      4    => "IV",  
      1    => "I"  
    }
  end

  def to_roman
    n = self
    result = ""
    wtf = roman.each_with_object do |numeral, key_num|
      n / numeral
    end
    # roman.each do |num, letter|
    #   result << letter * (n / num)
    #   n = n % num
    # end
    # result
    # result = []
    # roman.each_with_object(Hash.new(0)) do |num, hash|
    #   result << hash[num] 
  end
end
