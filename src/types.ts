export interface RepairService {
  name: string;
  price: string;
}

export interface MobileModel {
  id: string;
  name: string;
  image: string;
  description: string;
  services: RepairService[];
}

export interface BrandData {
  id: string;
  name: string;
  description: string;
  models: MobileModel[];
}
