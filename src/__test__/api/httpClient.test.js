import axios from 'axios';
import { postFormData } from '../../api/httpClient';

describe('httpClient utility', () => {
  beforeEach(() => {
    axios.post = jest.fn(() => Promise.resolve({}));
  });

  it('and postFormData', async () => {
    const formData = new FormData().append('test', 'test');
    await postFormData(formData);
    expect(axios.post).toHaveBeenCalledWith('/posts', formData);
  });
});
