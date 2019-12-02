class ProjectsController < ApplicationController
  # before_action :set_project, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  # GET /projects
  # GET /projects.json
  def index
    p "///////////////////////////"
    @projects = Project.all

    respond_to do |format|
    format.json {
      render :json => @projects,
      include: [:bug]
    }

  format.html
end
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(:project_title => params[:project_title], :start_date => params[:startDate], :end_date => params[:endDate],
      :status => params[:project_status])


    respond_to do |format|
      if @project.save
        p "pass on projects controller"
        format.html { redirect_to @project}
        format.json { render json: "ok" }
      else
        p "fail on projects controller"
      end
    end


  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.fetch(:project, {})
    end

    def other_params
      params.require(:project).permit(:bug_title, :issue_log, :due_date, :priority, :status, :issue_resolved, :severity)
    end

end