import * as utils from './index'

it('should truncate hashes', () => {
  expect(utils.truncateHash('1234567891011121314151617181920'))
    .toBe('1234567891011121314151617...');

    expect(utils.truncateHash('12345678910'))
    .toBe('12345678910');
});