class Hamming

  def self.compute(a, b)
    a.size.times.count { |i| a[i] != b[i] }
  end

end
