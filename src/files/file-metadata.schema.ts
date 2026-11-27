import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// The bytes belong in a private object store. MongoDB keeps metadata only.
@Schema({ collection: 'file_metadata', timestamps: true })
export class FileMetadata {
  @Prop({ required: true, index: true }) businessId: string;
  @Prop({ default: null, index: true }) branchId?: string | null;
  @Prop({ default: null, index: true }) employeeId?: string | null;
  @Prop({ required: true }) documentType: string;
  @Prop({ required: true, unique: true }) storageKey: string;
  @Prop({ required: true }) originalFilename: string;
  @Prop({ required: true }) contentType: string;
  @Prop({ required: true, min: 0 }) sizeBytes: number;
  @Prop({ required: true }) uploadedByUserId: string;
  @Prop({ enum: ['private', 'restricted'], default: 'private' })
  visibility: string;
  @Prop({ default: null }) deletedAt?: Date | null;
}
export const FileMetadataSchema = SchemaFactory.createForClass(FileMetadata);
FileMetadataSchema.index({ businessId: 1, employeeId: 1, documentType: 1 });
