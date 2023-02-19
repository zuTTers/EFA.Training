/****** Object:  View [dbo].[vVaccinationTransaction]    Script Date: 5.07.2022 23:13:25 ******/
DROP VIEW [dbo].[vVaccinationTransaction]
GO

/****** Object:  View [dbo].[vVaccinationTransaction]    Script Date: 5.07.2022 23:13:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[vVaccinationTransaction]
AS
Select vt.[VaccinationId]
      ,vt.[CustomerId]
	  ,c.FullName CustomerName
	  ,c.PhoneNumber
      ,vt.[PatientId]
	  ,p.FullName PatientName
	  ,g.Name GenusName
      ,vt.[VetId]
	  ,v.FullName VetName
      ,vt.[StatusId]
	  ,vs.Name StatusName
      ,vt.[VaccinationType]
	  ,vtt.Name VaccinationTypeName
      ,vt.[VaccinationDate]
      ,vt.[Description]
      ,vt.[CreatedUser]
      ,vt.[CreatedDate]
      ,vt.[UpdatedUser]
      ,vt.[UpdatedDate]
From VaccinationTransaction vt
Left Join Patient p On p.PatientId = vt.PatientId
Left Join Customer c On c.CustomerId = vt.CustomerId
Left Join Genus g On g.RaceId = p.GenuId
Left Join Vet v on v.VetId = vt.VetId
Left Join VaccinationStatus vs On vs.StatusId = vt.StatusId
Left Join VaccinationType vtt On vtt.TypeId = vt.VaccinationType
GO


