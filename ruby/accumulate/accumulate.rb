class Array

  def accumulate
    0.upto(self.length - 1) do |x|
      self[x] = yield(self[x])
    end
    self
  end

end