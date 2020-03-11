// modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// components
import { AddEditCommentPeriodComponent } from './comment-periods/add-edit-comment-period/add-edit-comment-period.component';
import { AddLabelComponent } from './project-documents/add-label/add-label.component';
import { CommentPeriodComponent } from './comment-period/comment-period.component';
import { CommentPeriodDetailsTabComponent } from './comment-period/comment-period-details-tabs/comment-period-details-tab.component';
import { CommentPeriodsComponent } from './comment-periods/comment-periods.component';
import { CommentPeriodsTableRowsComponent } from './comment-periods/comment-periods-table-rows/comment-periods-table-rows.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { DocumentDetailComponent } from './project-documents/detail/detail.component';
import { DocumentTableRowsComponent } from './project-documents/project-document-table-rows/project-document-table-rows.component';
import { IndigenousNationsComponent } from './indigenous-nations/indigenous-nations.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MilestonesComponent } from './milestones/milestones.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectDocumentsComponent } from './project-documents/project-documents.component';
import { ProjectShapefilesComponent } from './project-shapefiles/project-shapefiles.component';
import { ProjectUpdatesComponent } from './project-updates/project-updates.component';
import { ReviewCommentsTabComponent } from './comment-period/review-comments-tab/review-comments-tab.component';
import { ReviewCommentsTabTableRowsComponent } from './comment-period/review-comments-tab/review-comments-tab-table-rows/review-comments-tab-table-rows.component';
import { ShapefileTableRowsComponent } from './project-shapefiles/project-shapefile-table-rows/project-shapefile-table-rows.component';
import { UploadComponent } from './project-documents/upload/upload.component';

// services
import { ApiService } from 'app/services/api';
import { ExcelService } from 'app/services/excel.service';
import { ProjectService } from 'app/services/project.service';
import { StorageService } from 'app/services/storage.service';
import { DocumentEditComponent } from './project-documents/document-edit/document-edit.component';
import { ReviewCommentComponent } from './comment-period/review-comment/review-comment.component';
import { AddDocumentComponent } from './comment-periods/add-edit-comment-period/add-documents/add-documents.component';
import { AddDocumentTableRowsComponent } from './comment-periods/add-edit-comment-period/add-documents/add-document-table-rows/add-document-table-rows.component';
import { AddCommentComponent } from './comment-period/add-comment/add-comment.component';
import { CommentPeriodBannerComponent } from './comment-period-banner/comment-period-banner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MatMenuModule,
    MatTabsModule,
    NgxPaginationModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    SharedModule
  ],
  declarations: [
    AddCommentComponent,
    AddDocumentComponent,
    AddDocumentTableRowsComponent,
    AddEditCommentPeriodComponent,
    AddLabelComponent,
    CommentPeriodBannerComponent,
    CommentPeriodComponent,
    CommentPeriodDetailsTabComponent,
    CommentPeriodsComponent,
    CommentPeriodsTableRowsComponent,
    ComplianceComponent,
    DocumentDetailComponent,
    DocumentDetailComponent,
    DocumentEditComponent,
    DocumentTableRowsComponent,
    IndigenousNationsComponent,
    MilestonesComponent,
    ProjectDetailComponent,
    ProjectDocumentsComponent,
    ProjectShapefilesComponent,
    ProjectUpdatesComponent,
    ReviewCommentComponent,
    ReviewCommentsTabComponent,
    ReviewCommentsTabTableRowsComponent,
    ShapefileTableRowsComponent,
    UploadComponent,
  ],
  entryComponents: [
    AddDocumentTableRowsComponent,
    CommentPeriodComponent,
    CommentPeriodsComponent,
    CommentPeriodsTableRowsComponent,
    DocumentTableRowsComponent,
    ReviewCommentsTabTableRowsComponent,
    ShapefileTableRowsComponent,
    UploadComponent,
  ],
  exports: [
    ComplianceComponent,
    IndigenousNationsComponent,
    MilestonesComponent,
    ProjectDetailComponent,
    ProjectUpdatesComponent,
  ],
  providers: [
    ApiService,
    ExcelService,
    ProjectService,
    StorageService
  ]
})

export class ProjectModule { }
