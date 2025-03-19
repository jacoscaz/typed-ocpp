
import { OCPP16 } from './index.js';
import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';

const { MessageType, Action, validate } = OCPP16;

describe('OCPP16 - Call', () => {

  describe('types', () => {

    it('minimal notification', () => {
      [MessageType.CALL, 'test', Action.BootNotification, {
        chargePointModel: 'test',
        chargePointVendor: 'test',
      }] satisfies OCPP16.BootNotificationCall;
    });

  });


  describe('validation', () => {
  
    describe('BootNotification', () => {

      it('minimal notification', () => {
        deepStrictEqual(validate([MessageType.CALL, 'test', Action.BootNotification, {
          chargePointModel: 'test',
          chargePointVendor: '55',
        }]), true);
        deepStrictEqual(validate.errors, []);
      });
  
      it('invalid notification (missing model)', () => {
        deepStrictEqual(validate([MessageType.CALL, 'test', Action.BootNotification, {
          chargePointVendor: '55',
        }]), false);
        deepStrictEqual(validate.errors, [
          "Invalid OCPP call:  must have required property 'chargePointModel'"
        ]);
      });

    });

    describe('StopTransaction', () => {

      it('Using "Celsius" unit in sampledValue array', () => {
        const call = [ 
          2, 
          "983728ed-5d83-467f-be81-81282b93e8b2", 
          "StopTransaction", 
          { 
            idTag: "1347738830", 
            meterStop: 9972365, 
            reason: "EVDisconnected", 
            timestamp: "2025-03-17T23:33:29.456Z", 
            transactionData: [ 
              { 
                sampledValue: [ 
                  { 
                    context: "Transaction.End",
                    format: "Raw", 
                    location: "Body", 
                    measurand: "Temperature", 
                    unit: "Celsius", 
                    value: "60",
                  }
                ],
                timestamp: "2025-03-17T23:33:29.456Z"
              }
            ],
            transactionId: 1705987302
          }
        ];
        deepStrictEqual(validate(call), true);
      });
      
    });

  });

});
