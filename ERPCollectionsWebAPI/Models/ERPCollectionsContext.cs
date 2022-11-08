using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ERPCollectionsWebAPI.Models
{
    public partial class ERPCollectionsContext : DbContext
    {
        public ERPCollectionsContext()
        {
        }

        public ERPCollectionsContext(DbContextOptions<ERPCollectionsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Case> Cases { get; set; } = null!;
        public virtual DbSet<Collaborator> Collaborators { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server = 163.178.173.148; Initial Catalog = ERP Collections;User ID = lenguajes; Password = lg.2022zx; Integrated Security=False;Trusted_Connection=False;");                 
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Case>(entity =>
            {
                entity.HasKey(e => e.IdCase);

                entity.ToTable("Case");

                entity.Property(e => e.IdCase).HasColumnName("idCase");

                entity.Property(e => e.CodeCase)
                    .HasMaxLength(50)
                    .HasColumnName("codeCase");

                entity.Property(e => e.Court)
                    .HasMaxLength(20)
                    .HasColumnName("court");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.FormalQuote).HasColumnName("formalQuote");

                entity.Property(e => e.State)
                    .HasMaxLength(20)
                    .HasColumnName("state");

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.CaseClients)
                    .HasForeignKey(d => d.ClientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Case_User");

                entity.HasOne(d => d.Collaborator)
                    .WithMany(p => p.CaseCollaborators)
                    .HasForeignKey(d => d.CollaboratorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Case_User1");
            });

            modelBuilder.Entity<Collaborator>(entity =>
            {
                entity.HasKey(e => e.IdCollaborator);

                entity.ToTable("Collaborator");

                entity.Property(e => e.IdCollaborator).HasColumnName("idCollaborator");

                entity.Property(e => e.Dni)
                    .HasMaxLength(50)
                    .HasColumnName("dni");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Lastname)
                    .HasMaxLength(50)
                    .HasColumnName("lastname");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(20)
                    .HasColumnName("roleName");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.IdUser);

                entity.ToTable("User");

                entity.Property(e => e.IdUser).HasColumnName("idUser");

                entity.Property(e => e.Lastname).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .HasColumnName("password");

                entity.Property(e => e.UserDni)
                    .HasMaxLength(20)
                    .HasColumnName("userDNI");

                entity.Property(e => e.UserEmail)
                    .HasMaxLength(50)
                    .HasColumnName("userEmail");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_User_Role");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
