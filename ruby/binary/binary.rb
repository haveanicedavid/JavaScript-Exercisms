class Binary

  attr_reader :num

  def initialize(num)
    @num = sanitize(num)
  end

  def to_decimal
    num.map.with_index do |x, index|
      x.to_i * (2**index) 
    end.reduce(:+)
  end

  private

    def sanitize(num)
      num.everse.chars
    end
end
