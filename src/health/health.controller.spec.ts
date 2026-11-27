import { describe, expect, it } from 'vitest';
import { HealthController } from './health.controller.js';

describe('files service health', () => {
  it('reports service identity', () => {
    expect(new HealthController().check()).toEqual({
      status: 'ok',
      service: 'hrms-files',
    });
  });
});
