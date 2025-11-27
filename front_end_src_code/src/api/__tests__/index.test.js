
import { loadDataView } from '../index';
import axios from 'axios';

jest.mock('axios');

describe('loadDataView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should make a GET request to /task/loadTaskList', async () => {
    const mockResponse = { data: 'test data' };
    axios.get.mockResolvedValue(mockResponse);

    const result = await loadDataView();

    expect(axios.get).toHaveBeenCalledWith('/task/loadTaskList');
    expect(result).toEqual(mockResponse);
  });

  it('should handle request errors', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(loadDataView()).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith('/task/loadTaskList');
  });
});