import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'

// This will enable mocks throughout the whole project.

const fetchMock = createFetchMock(vi)
fetchMock.enableMocks()
