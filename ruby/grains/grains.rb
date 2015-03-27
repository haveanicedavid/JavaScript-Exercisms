# def total
#   total = 0
#   1.upto(64) do |x|
#     total += square(x) 
#   end
#   total
# end
# ^^ Why does this not work?? ^^

class Grains

  def square(n)
    # grains = 1
    (1...n).map{|x| x * 2}
    # (n-1).times do
    #   grains *= 2
    # end
    # grains
  end

  def total(size = 64)
    total = [] 
    1.upto(size) do |x|
      total << square(x) 
    end
    total.reduce(:+)
  end
end
