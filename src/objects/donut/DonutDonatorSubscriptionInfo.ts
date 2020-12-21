/**
 * This is auto-generated file, don't modify this file manually
 */

// donut_donator_subscription_info status enum
export enum DonutDonatorSubscriptionInfoStatusEnum {
  ACTIVE = 'active',
  EXPIRING = 'expiring',
}

// donut_donator_subscription_info
export interface DonutDonatorSubscriptionInfo {
  owner_id: number;
  next_payment_date: number;
  amount: number;
  status: DonutDonatorSubscriptionInfoStatusEnum;
}
