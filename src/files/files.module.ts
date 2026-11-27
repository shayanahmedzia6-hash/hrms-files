import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileMetadata, FileMetadataSchema } from './file-metadata.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FileMetadata.name, schema: FileMetadataSchema },
    ]),
  ],
})
export class FilesModule {}
