using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EFA.Models
{
    public partial class EdisDEVContext : DbContext
    {
        public EdisDEVContext()
        {
        }

        public EdisDEVContext(DbContextOptions<EdisDEVContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Auth> Auths { get; set; }
        public virtual DbSet<Counter> Counters { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Dashboard> Dashboards { get; set; }
        public virtual DbSet<Email> Emails { get; set; }
        public virtual DbSet<EmailAttachment> EmailAttachments { get; set; }
        public virtual DbSet<EmailConfig> EmailConfigs { get; set; }
        public virtual DbSet<Log> Logs { get; set; }
        public virtual DbSet<Menu> Menus { get; set; }
        public virtual DbSet<Parameter> Parameters { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<RoleAuth> RoleAuths { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\MSSQLSERVER2016;Database=Edis-DEV;User ID=zubeyir;Password=~vnOe033;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Turkish_CI_AS");

            modelBuilder.Entity<Auth>(entity =>
            {
                entity.Property(e => e.AuthCode).HasMaxLength(150);

                entity.Property(e => e.AuthDesc).HasMaxLength(150);

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.AuthCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Auths_Users");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.AuthUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Auths_Users1");
            });

            modelBuilder.Entity<Counter>(entity =>
            {
                entity.Property(e => e.CounterName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Prefix)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.CounterCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Counters_Users");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.CounterUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Counters_Users1");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.Address).HasMaxLength(200);

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.CreatedUser).HasDefaultValueSql("((1))");

                entity.Property(e => e.FirstStartDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.IdentityCode).IsRequired();

                entity.Property(e => e.IdentityNumber)
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdatedUser).HasDefaultValueSql("((1))");

                entity.Property(e => e.WorkingEndDate).HasColumnType("datetime");

                entity.Property(e => e.WorkingStartDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.CustomerCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Customer_Users101");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.CustomerUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Customer_Users102");
            });

            modelBuilder.Entity<Dashboard>(entity =>
            {
                entity.HasKey(e => e.Dashboard1);

                entity.ToTable("Dashboard");

                entity.Property(e => e.Dashboard1)
                    .ValueGeneratedNever()
                    .HasColumnName("Dashboard");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.CreatedUser).HasDefaultValueSql("((1))");

                entity.Property(e => e.Description).HasMaxLength(50);

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdatedUser).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.DashboardCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Dashboard_Users101");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.DashboardUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Dashboard_Users102");
            });

            modelBuilder.Entity<Email>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.EmailFrom)
                    .IsRequired()
                    .HasMaxLength(150);

                entity.Property(e => e.EmailTo).HasMaxLength(1500);

                entity.Property(e => e.EmailToBcc)
                    .HasMaxLength(1500)
                    .HasColumnName("EmailToBCC");

                entity.Property(e => e.EmailToCc)
                    .HasMaxLength(1500)
                    .HasColumnName("EmailToCC");

                entity.Property(e => e.IsHtml).HasColumnName("IsHTML");

                entity.Property(e => e.SendDate).HasColumnType("datetime");

                entity.Property(e => e.Subject).HasMaxLength(500);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.EmailCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Emails_Users");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.EmailUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Emails_Users1");
            });

            modelBuilder.Entity<EmailAttachment>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.FilePath).HasMaxLength(550);

                entity.Property(e => e.Name).HasMaxLength(250);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.EmailAttachmentCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmailAttachments_Users");

                entity.HasOne(d => d.Email)
                    .WithMany(p => p.EmailAttachments)
                    .HasForeignKey(d => d.EmailId)
                    .HasConstraintName("FK_EmailAttachments_Emails");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.EmailAttachmentUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmailAttachments_Users1");
            });

            modelBuilder.Entity<EmailConfig>(entity =>
            {
                entity.Property(e => e.ConfigName).HasMaxLength(50);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.EnableSsl).HasColumnName("EnableSSL");

                entity.Property(e => e.Host).HasMaxLength(100);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.Port).HasMaxLength(10);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.UserName).HasMaxLength(150);

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.EmailConfigCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmailConfigs_Users");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.EmailConfigUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmailConfigs_Users1");
            });

            modelBuilder.Entity<Log>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.FreeText1).HasMaxLength(50);

                entity.Property(e => e.FreeText2).HasMaxLength(50);

                entity.Property(e => e.FreeText3).HasMaxLength(50);

                entity.Property(e => e.Message).IsRequired();

                entity.Property(e => e.Source)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.LogCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Logs_Users");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.LogUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Logs_Users1");
            });

            modelBuilder.Entity<Menu>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.MenuIcon).HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(70);

                entity.Property(e => e.State).HasMaxLength(50);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.MenuCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .HasConstraintName("FK_Menus_Menus");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.MenuUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .HasConstraintName("FK_Menus_Users");
            });

            modelBuilder.Entity<Parameter>(entity =>
            {
                entity.HasKey(e => e.ParamId);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.FreeText1).HasMaxLength(50);

                entity.Property(e => e.FreeText2).HasMaxLength(50);

                entity.Property(e => e.FreeText3).HasMaxLength(50);

                entity.Property(e => e.ParamCode).HasMaxLength(150);

                entity.Property(e => e.ParamDesc).HasMaxLength(250);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.ParameterCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Parameters_Users");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.ParameterUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Parameters_Users1");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.RoleDesc).HasMaxLength(150);

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(70);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.RoleCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Roles_Users");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.RoleUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Roles_Users1");
            });

            modelBuilder.Entity<RoleAuth>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.Auth)
                    .WithMany(p => p.RoleAuths)
                    .HasForeignKey(d => d.AuthId)
                    .HasConstraintName("FK_RoleAuths_Auths");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.RoleAuthCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoleAuths_Users");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.RoleAuths)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_RoleAuths_Roles");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.RoleAuthUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoleAuths_Users1");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.FirstName).HasMaxLength(70);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.LastLoginDate).HasColumnType("datetime");

                entity.Property(e => e.LastLoginIp).HasMaxLength(100);

                entity.Property(e => e.LastName).HasMaxLength(70);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<UserRole>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.CreatedUserNavigation)
                    .WithMany(p => p.UserRoleCreatedUserNavigations)
                    .HasForeignKey(d => d.CreatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserRoles_Users");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserRoles)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserRoles_Roles");

                entity.HasOne(d => d.UpdatedUserNavigation)
                    .WithMany(p => p.UserRoleUpdatedUserNavigations)
                    .HasForeignKey(d => d.UpdatedUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserRoles_Users1");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserRoleUsers)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserRoles_Users2");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
