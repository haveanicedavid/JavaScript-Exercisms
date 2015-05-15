class Raindrops

  DROPS = 
   { 3 => "Pling",
     5 => "Plang",
     7 => "Plong"
   }

  def self.convert(num)
    result = DROPS.map do |num_key, word|
      word if num % num_key == 0
    end.join
    result.empty? ? num.to_s : result
  end

end
