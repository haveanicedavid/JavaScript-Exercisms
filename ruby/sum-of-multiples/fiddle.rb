require 'prime'

class What

  def nums 
    return *(1...23).to_a
  end

  def subtractor(nums)
    combos = nums.combination(2).to_a
    combos.map { |n| n[0] * n[1] }
    # combos.map { |n| n.reduce(1){|total, x| total * x} }.uniq.reduce(0){|sum, x| sum + x}
    # combos.map { |n| n.reduce(1){|total, x| total * x} }.uniq.reduce(0){|sum, x| sum + x}
  end
end

t = What.new
# print t.nums
print t.subtractor([3,5,7])